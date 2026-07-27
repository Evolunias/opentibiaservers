import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-custom-map-servers');
}

export default function Tibiantis15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-custom-map-servers" />;
}
