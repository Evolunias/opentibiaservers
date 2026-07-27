import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-real-map-server');
}

export default function Realera11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-real-map-server" />;
}
