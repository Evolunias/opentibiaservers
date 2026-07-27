import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-germany');
}

export default function KasteriaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-germany" />;
}
