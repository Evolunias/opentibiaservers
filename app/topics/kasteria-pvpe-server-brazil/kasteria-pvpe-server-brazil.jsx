import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-brazil');
}

export default function KasteriaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-brazil" />;
}
