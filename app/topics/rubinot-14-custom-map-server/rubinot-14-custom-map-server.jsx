import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-custom-map-server');
}

export default function Rubinot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-custom-map-server" />;
}
