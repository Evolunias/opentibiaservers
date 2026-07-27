import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-north-america');
}

export default function KasteriaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-north-america" />;
}
