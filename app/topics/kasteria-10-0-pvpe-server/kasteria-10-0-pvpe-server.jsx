import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-pvpe-server');
}

export default function Kasteria100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-pvpe-server" />;
}
