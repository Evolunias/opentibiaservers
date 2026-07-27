import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-ot-server');
}

export default function TopNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-ot-server" />;
}
