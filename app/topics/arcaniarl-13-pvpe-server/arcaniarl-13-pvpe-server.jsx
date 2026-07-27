import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-pvpe-server');
}

export default function Arcaniarl13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-pvpe-server" />;
}
