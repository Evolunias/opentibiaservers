import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-france');
}

export default function KasteriaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-france" />;
}
