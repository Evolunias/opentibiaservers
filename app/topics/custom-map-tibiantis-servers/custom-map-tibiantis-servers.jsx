import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiantis-servers');
}

export default function CustomMapTibiantisServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiantis-servers" />;
}
