import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-0-custom-map-servers');
}

export default function Tibiantis80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-0-custom-map-servers" />;
}
