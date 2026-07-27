import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-real-map-server');
}

export default function Rubinot84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-real-map-server" />;
}
