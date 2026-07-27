import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-client');
}

export default function BestAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-client" />;
}
