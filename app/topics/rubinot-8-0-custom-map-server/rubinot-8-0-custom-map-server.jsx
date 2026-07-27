import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-custom-map-server');
}

export default function Rubinot80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-custom-map-server" />;
}
