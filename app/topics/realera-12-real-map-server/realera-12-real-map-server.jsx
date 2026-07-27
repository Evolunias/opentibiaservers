import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-real-map-server');
}

export default function Realera12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-real-map-server" />;
}
