import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-login');
}

export default function RealMapRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-login" />;
}
