import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-custom-map-servers');
}

export default function Tibiantis13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-custom-map-servers" />;
}
