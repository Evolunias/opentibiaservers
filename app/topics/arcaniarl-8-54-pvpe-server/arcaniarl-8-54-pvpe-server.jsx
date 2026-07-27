import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-54-pvpe-server');
}

export default function Arcaniarl854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-54-pvpe-server" />;
}
