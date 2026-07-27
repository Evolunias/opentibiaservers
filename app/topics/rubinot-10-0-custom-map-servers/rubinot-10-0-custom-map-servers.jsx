import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-custom-map-servers');
}

export default function Rubinot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-custom-map-servers" />;
}
