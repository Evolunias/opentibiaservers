import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-custom-map-servers');
}

export default function Kasteria11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-custom-map-servers" />;
}
