import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-brazil');
}

export default function CalmeraOtPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-brazil" />;
}
