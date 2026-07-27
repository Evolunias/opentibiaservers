import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-servers');
}

export default function RealMapRubinotServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-servers" />;
}
