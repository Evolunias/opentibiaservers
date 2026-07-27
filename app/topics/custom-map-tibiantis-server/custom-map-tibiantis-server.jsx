import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiantis-server');
}

export default function CustomMapTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiantis-server" />;
}
