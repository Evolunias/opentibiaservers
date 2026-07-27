import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-custom-map-servers');
}

export default function Rubinot84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-custom-map-servers" />;
}
