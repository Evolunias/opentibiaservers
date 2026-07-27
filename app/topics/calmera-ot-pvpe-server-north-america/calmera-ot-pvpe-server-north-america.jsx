import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-north-america');
}

export default function CalmeraOtPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-north-america" />;
}
