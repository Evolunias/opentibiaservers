import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-blazera-servers');
}

export default function CustomMapBlazeraServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-blazera-servers" />;
}
