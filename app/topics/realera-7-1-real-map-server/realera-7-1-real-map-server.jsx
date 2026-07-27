import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-real-map-server');
}

export default function Realera71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-real-map-server" />;
}
