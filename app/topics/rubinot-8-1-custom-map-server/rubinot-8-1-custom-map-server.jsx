import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-custom-map-server');
}

export default function Rubinot81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-custom-map-server" />;
}
