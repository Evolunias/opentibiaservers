import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-argentina');
}

export default function CalmeraOtPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-argentina" />;
}
