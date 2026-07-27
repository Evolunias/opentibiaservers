import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-ot');
}

export default function BestNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-ot" />;
}
