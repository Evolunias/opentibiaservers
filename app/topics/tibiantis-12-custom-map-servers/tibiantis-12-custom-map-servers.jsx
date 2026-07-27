import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-custom-map-servers');
}

export default function Tibiantis12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-custom-map-servers" />;
}
