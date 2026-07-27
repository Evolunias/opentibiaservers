import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-custom-map-server');
}

export default function Rubinot12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-custom-map-server" />;
}
