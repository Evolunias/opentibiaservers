import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-54-custom-map-servers');
}

export default function Rubinot854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-54-custom-map-servers" />;
}
