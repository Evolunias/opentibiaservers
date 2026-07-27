import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-pvpe-server');
}

export default function CalmeraOt11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-pvpe-server" />;
}
