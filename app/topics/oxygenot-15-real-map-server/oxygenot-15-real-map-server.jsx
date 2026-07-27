import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-real-map-server');
}

export default function Oxygenot15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-real-map-server" />;
}
