import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-custom-map-servers');
}

export default function Rubinot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-custom-map-servers" />;
}
