import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-real-map-server');
}

export default function Oxygenot11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-real-map-server" />;
}
