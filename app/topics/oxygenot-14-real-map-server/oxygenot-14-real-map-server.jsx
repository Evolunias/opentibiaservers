import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-real-map-server');
}

export default function Oxygenot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-real-map-server" />;
}
