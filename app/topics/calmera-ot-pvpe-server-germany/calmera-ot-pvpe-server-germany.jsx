import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-germany');
}

export default function CalmeraOtPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-germany" />;
}
