import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-servers');
}

export default function RealMapTibiaraServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-servers" />;
}
