import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-ot');
}

export default function BestAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-ot" />;
}
