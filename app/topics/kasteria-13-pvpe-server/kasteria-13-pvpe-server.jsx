import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-pvpe-server');
}

export default function Kasteria13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-pvpe-server" />;
}
