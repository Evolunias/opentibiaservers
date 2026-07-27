import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-real-map-server');
}

export default function Oxygenot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-real-map-server" />;
}
