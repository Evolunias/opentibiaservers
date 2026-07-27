import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-custom-map-servers');
}

export default function Kasteria14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-custom-map-servers" />;
}
