import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-real-map-server');
}

export default function Evolera80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-real-map-server" />;
}
