import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-custom-map-servers');
}

export default function Rubinot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-custom-map-servers" />;
}
