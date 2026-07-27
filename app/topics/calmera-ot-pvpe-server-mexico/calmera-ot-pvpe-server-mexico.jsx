import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-mexico');
}

export default function CalmeraOtPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-mexico" />;
}
