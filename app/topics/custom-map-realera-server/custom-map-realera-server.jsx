import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-realera-server');
}

export default function CustomMapRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-realera-server" />;
}
