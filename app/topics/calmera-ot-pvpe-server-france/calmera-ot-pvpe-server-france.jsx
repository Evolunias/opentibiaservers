import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-france');
}

export default function CalmeraOtPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-france" />;
}
