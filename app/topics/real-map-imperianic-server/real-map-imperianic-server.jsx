import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-server');
}

export default function RealMapImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-server" />;
}
