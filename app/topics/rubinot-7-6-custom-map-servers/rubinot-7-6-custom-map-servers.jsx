import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-custom-map-servers');
}

export default function Rubinot76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-custom-map-servers" />;
}
