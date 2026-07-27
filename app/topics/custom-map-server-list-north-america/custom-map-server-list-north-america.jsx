import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-north-america');
}

export default function CustomMapServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-north-america" />;
}
