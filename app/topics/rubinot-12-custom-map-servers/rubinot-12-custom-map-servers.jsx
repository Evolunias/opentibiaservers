import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-custom-map-servers');
}

export default function Rubinot12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-custom-map-servers" />;
}
