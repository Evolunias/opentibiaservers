import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-realera-servers');
}

export default function CustomMapRealeraServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-realera-servers" />;
}
