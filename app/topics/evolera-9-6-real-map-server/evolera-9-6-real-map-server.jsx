import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-real-map-server');
}

export default function Evolera96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-real-map-server" />;
}
