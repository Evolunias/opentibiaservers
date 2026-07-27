import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-pvpe-server');
}

export default function Arcaniarl74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-pvpe-server" />;
}
