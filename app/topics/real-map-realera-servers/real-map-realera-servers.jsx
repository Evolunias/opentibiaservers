import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-servers');
}

export default function RealMapRealeraServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-servers" />;
}
