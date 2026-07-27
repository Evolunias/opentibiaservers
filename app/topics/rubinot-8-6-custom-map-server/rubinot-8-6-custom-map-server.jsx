import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-custom-map-server');
}

export default function Rubinot86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-custom-map-server" />;
}
