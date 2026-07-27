import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-canada');
}

export default function CalmeraOtPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-canada" />;
}
