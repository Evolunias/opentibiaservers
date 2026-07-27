import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-custom-map-servers');
}

export default function Tibiantis84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-custom-map-servers" />;
}
