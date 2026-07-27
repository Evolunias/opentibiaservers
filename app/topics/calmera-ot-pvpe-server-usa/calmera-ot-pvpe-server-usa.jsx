import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-usa');
}

export default function CalmeraOtPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-usa" />;
}
