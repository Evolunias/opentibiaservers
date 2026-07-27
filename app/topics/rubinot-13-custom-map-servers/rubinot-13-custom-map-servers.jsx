import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-custom-map-servers');
}

export default function Rubinot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-custom-map-servers" />;
}
