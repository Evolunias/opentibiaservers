import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-servers');
}

export default function RealMapImperianicServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-servers" />;
}
