import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-ot-server');
}

export default function BestNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-ot-server" />;
}
