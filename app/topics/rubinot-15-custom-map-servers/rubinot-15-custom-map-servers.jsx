import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-custom-map-servers');
}

export default function Rubinot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-custom-map-servers" />;
}
