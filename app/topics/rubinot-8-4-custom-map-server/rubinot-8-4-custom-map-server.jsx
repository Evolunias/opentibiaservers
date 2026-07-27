import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-custom-map-server');
}

export default function Rubinot84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-custom-map-server" />;
}
