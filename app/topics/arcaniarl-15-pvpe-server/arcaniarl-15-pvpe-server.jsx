import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-pvpe-server');
}

export default function Arcaniarl15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-pvpe-server" />;
}
