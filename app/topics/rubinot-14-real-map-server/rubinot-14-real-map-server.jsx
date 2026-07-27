import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-real-map-server');
}

export default function Rubinot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-real-map-server" />;
}
