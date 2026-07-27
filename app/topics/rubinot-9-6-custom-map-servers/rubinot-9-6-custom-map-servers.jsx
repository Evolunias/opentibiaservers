import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-custom-map-servers');
}

export default function Rubinot96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-custom-map-servers" />;
}
