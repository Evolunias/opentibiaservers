import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-pvpe-server');
}

export default function Kasteria76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-pvpe-server" />;
}
