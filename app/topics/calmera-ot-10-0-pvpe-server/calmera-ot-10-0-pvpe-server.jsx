import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-pvpe-server');
}

export default function CalmeraOt100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-pvpe-server" />;
}
