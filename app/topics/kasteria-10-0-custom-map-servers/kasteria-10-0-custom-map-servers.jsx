import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-custom-map-servers');
}

export default function Kasteria100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-custom-map-servers" />;
}
