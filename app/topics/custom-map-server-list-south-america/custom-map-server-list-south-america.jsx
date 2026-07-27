import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-south-america');
}

export default function CustomMapServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-south-america" />;
}
