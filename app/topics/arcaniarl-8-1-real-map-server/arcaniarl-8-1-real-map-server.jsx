import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-real-map-server');
}

export default function Arcaniarl81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-real-map-server" />;
}
