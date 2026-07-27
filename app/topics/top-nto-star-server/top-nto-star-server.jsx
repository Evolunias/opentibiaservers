import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-server');
}

export default function TopNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-server" />;
}
