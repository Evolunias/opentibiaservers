import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-pvpe-server');
}

export default function CalmeraOt15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-pvpe-server" />;
}
