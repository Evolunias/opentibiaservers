import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-real-map-server');
}

export default function Rubinot81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-real-map-server" />;
}
