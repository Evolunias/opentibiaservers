import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-ot-server');
}

export default function LowrateXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-ot-server" />;
}
