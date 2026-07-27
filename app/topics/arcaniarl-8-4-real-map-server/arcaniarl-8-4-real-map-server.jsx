import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-real-map-server');
}

export default function Arcaniarl84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-real-map-server" />;
}
