import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-real-map-server');
}

export default function Rubinot96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-real-map-server" />;
}
