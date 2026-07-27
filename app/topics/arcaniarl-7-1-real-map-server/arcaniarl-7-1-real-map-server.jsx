import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-real-map-server');
}

export default function Arcaniarl71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-real-map-server" />;
}
