import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-real-map-server');
}

export default function Arcaniarl15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-real-map-server" />;
}
