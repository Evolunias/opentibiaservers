import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-54-pvpe-server');
}

export default function Kasteria854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-54-pvpe-server" />;
}
