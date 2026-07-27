import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-pvpe-server');
}

export default function CalmeraOt84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-pvpe-server" />;
}
