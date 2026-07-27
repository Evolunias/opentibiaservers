import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-custom-map-servers');
}

export default function Tibiantis14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-custom-map-servers" />;
}
