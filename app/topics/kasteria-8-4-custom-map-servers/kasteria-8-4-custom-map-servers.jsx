import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-custom-map-servers');
}

export default function Kasteria84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-custom-map-servers" />;
}
