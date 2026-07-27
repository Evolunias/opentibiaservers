import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-pvpe-server');
}

export default function Arcaniarl76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-pvpe-server" />;
}
