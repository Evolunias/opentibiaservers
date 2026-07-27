import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-pvpe-server');
}

export default function Arcaniarl14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-pvpe-server" />;
}
