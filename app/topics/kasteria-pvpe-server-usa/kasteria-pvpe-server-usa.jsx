import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-usa');
}

export default function KasteriaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-usa" />;
}
