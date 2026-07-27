import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-custom-map-server');
}

export default function Rubinot71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-custom-map-server" />;
}
