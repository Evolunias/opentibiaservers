import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-servers');
}

export default function RealMapRealestaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-servers" />;
}
