import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-mexico');
}

export default function KasteriaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-mexico" />;
}
