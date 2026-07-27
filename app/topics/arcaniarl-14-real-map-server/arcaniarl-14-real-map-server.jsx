import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-real-map-server');
}

export default function Arcaniarl14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-real-map-server" />;
}
