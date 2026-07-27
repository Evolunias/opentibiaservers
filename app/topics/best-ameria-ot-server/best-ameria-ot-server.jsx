import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-ot-server');
}

export default function BestAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-ot-server" />;
}
