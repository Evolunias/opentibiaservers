import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-real-map-server');
}

export default function Realera1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-real-map-server" />;
}
