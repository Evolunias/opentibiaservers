import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-real-map-server');
}

export default function Arcaniarl11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-real-map-server" />;
}
