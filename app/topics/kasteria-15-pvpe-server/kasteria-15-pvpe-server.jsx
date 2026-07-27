import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-pvpe-server');
}

export default function Kasteria15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-pvpe-server" />;
}
