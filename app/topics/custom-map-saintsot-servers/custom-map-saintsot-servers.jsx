import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-saintsot-servers');
}

export default function CustomMapSaintsotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-saintsot-servers" />;
}
