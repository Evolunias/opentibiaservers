import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-custom-map-servers');
}

export default function Tibiantis71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-custom-map-servers" />;
}
