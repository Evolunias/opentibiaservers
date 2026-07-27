import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-real-map-server');
}

export default function Arcaniarl74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-real-map-server" />;
}
