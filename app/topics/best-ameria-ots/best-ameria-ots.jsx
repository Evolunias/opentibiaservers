import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-ots');
}

export default function BestAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-ots" />;
}
