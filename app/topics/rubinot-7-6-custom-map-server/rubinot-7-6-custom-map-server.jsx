import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-custom-map-server');
}

export default function Rubinot76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-custom-map-server" />;
}
