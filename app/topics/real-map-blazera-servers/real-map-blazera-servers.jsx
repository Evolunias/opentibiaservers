import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-servers');
}

export default function RealMapBlazeraServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-servers" />;
}
