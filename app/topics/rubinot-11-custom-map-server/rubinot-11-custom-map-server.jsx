import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-custom-map-server');
}

export default function Rubinot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-custom-map-server" />;
}
