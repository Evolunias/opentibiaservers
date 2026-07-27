import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-real-map-server');
}

export default function Evolera13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-real-map-server" />;
}
