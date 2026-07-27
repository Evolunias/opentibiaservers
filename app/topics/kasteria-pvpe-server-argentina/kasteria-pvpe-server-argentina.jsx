import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-argentina');
}

export default function KasteriaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-argentina" />;
}
