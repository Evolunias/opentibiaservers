import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-custom-map-server');
}

export default function Rubinot74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-custom-map-server" />;
}
