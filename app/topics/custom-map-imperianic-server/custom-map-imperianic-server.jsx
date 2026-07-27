import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-imperianic-server');
}

export default function CustomMapImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-imperianic-server" />;
}
