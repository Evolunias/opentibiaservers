import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-pvpe-server');
}

export default function Kasteria71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-pvpe-server" />;
}
