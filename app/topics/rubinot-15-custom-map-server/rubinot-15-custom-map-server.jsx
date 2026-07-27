import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-custom-map-server');
}

export default function Rubinot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-custom-map-server" />;
}
