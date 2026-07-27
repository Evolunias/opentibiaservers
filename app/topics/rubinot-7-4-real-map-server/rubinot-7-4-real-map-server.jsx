import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-real-map-server');
}

export default function Rubinot74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-real-map-server" />;
}
