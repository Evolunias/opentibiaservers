import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-custom-map-servers');
}

export default function Tibiantis76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-custom-map-servers" />;
}
