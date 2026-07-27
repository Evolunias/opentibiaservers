import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-54-custom-map-servers');
}

export default function Kasteria854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-54-custom-map-servers" />;
}
