import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-pvpe-server');
}

export default function CalmeraOt13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-pvpe-server" />;
}
