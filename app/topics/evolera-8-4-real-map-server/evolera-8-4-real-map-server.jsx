import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-real-map-server');
}

export default function Evolera84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-real-map-server" />;
}
