import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-pvpe-server');
}

export default function CalmeraOt96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-pvpe-server" />;
}
