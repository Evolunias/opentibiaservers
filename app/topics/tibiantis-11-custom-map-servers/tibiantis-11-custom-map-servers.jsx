import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-custom-map-servers');
}

export default function Tibiantis11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-custom-map-servers" />;
}
