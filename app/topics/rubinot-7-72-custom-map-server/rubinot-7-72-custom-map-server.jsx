import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-custom-map-server');
}

export default function Rubinot772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-custom-map-server" />;
}
