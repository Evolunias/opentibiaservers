import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-real-map-server');
}

export default function Rubinot15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-real-map-server" />;
}
