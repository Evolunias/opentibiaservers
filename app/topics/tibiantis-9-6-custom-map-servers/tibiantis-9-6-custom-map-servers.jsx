import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-custom-map-servers');
}

export default function Tibiantis96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-custom-map-servers" />;
}
