import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-real-map-server');
}

export default function Oxygenot13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-real-map-server" />;
}
