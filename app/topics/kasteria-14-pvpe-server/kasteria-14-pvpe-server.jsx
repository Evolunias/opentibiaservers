import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-pvpe-server');
}

export default function Kasteria14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-pvpe-server" />;
}
