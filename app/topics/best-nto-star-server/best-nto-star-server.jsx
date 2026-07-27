import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-server');
}

export default function BestNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-server" />;
}
