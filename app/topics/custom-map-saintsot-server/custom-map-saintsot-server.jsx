import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-saintsot-server');
}

export default function CustomMapSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-saintsot-server" />;
}
