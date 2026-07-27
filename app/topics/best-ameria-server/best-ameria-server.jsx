import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-server');
}

export default function BestAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-server" />;
}
