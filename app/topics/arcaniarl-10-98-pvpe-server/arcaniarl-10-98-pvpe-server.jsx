import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-98-pvpe-server');
}

export default function Arcaniarl1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-98-pvpe-server" />;
}
