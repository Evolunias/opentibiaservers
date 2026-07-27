import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-pvpe-server');
}

export default function Arcaniarl71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-pvpe-server" />;
}
