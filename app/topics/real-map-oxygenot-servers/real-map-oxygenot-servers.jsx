import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-servers');
}

export default function RealMapOxygenotServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-servers" />;
}
