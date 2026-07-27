import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-custom-map-server');
}

export default function Rubinot96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-custom-map-server" />;
}
