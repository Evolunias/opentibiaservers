import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-custom-map-servers');
}

export default function Tibiantis772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-custom-map-servers" />;
}
