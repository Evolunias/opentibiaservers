import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-custom-map-servers');
}

export default function Tibiantis100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-custom-map-servers" />;
}
