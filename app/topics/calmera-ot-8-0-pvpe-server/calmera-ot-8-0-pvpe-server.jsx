import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-0-pvpe-server');
}

export default function CalmeraOt80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-0-pvpe-server" />;
}
