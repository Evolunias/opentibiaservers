import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-ot-server');
}

export default function LowrateAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-ot-server" />;
}
