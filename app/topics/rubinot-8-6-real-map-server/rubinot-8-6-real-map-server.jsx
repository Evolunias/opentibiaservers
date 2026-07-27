import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-real-map-server');
}

export default function Rubinot86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-real-map-server" />;
}
