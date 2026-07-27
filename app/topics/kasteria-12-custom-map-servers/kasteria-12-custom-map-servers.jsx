import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-custom-map-servers');
}

export default function Kasteria12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-custom-map-servers" />;
}
