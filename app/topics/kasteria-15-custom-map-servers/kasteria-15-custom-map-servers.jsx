import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-custom-map-servers');
}

export default function Kasteria15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-custom-map-servers" />;
}
