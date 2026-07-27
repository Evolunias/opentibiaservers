import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-blazera-server');
}

export default function CustomMapBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-blazera-server" />;
}
