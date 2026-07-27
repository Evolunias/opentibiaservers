import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-real-map-server');
}

export default function Oxygenot100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-real-map-server" />;
}
