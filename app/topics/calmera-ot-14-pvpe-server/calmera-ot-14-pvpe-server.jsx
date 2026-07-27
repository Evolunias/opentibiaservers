import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-pvpe-server');
}

export default function CalmeraOt14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-pvpe-server" />;
}
