import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-south-america');
}

export default function CalmeraOtPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-south-america" />;
}
