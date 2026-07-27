import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-custom-map-servers');
}

export default function Rubinot71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-custom-map-servers" />;
}
