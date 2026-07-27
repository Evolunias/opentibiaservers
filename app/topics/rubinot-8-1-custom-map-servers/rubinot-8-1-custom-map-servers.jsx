import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-custom-map-servers');
}

export default function Rubinot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-custom-map-servers" />;
}
