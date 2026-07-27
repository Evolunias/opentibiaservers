import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-custom-map-servers');
}

export default function Kasteria1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-custom-map-servers" />;
}
