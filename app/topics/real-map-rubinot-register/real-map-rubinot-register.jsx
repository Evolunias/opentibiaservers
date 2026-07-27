import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-register');
}

export default function RealMapRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-register" />;
}
