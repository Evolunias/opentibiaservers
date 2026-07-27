import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-private-server');
}

export default function TopNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-private-server" />;
}
