import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-uk');
}

export default function CalmeraOtPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-uk" />;
}
