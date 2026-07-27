import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-real-map-server');
}

export default function Realera15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-real-map-server" />;
}
