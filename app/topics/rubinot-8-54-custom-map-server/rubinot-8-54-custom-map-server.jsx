import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-54-custom-map-server');
}

export default function Rubinot854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-54-custom-map-server" />;
}
