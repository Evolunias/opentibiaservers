import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-custom-map-servers');
}

export default function Kasteria81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-custom-map-servers" />;
}
