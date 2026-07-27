import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-latin-america');
}

export default function CalmeraOtPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-latin-america" />;
}
