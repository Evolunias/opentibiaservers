import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-custom-map-servers');
}

export default function Kasteria96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-custom-map-servers" />;
}
