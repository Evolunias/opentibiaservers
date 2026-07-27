import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-pvpe-server');
}

export default function Kasteria1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-pvpe-server" />;
}
