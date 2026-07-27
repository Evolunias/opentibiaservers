import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-72-pvpe-server');
}

export default function Arcaniarl772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-72-pvpe-server" />;
}
