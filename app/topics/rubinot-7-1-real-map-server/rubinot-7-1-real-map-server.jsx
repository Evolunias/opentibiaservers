import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-real-map-server');
}

export default function Rubinot71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-real-map-server" />;
}
