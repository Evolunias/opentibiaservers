import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-poland');
}

export default function CalmeraOtPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-poland" />;
}
