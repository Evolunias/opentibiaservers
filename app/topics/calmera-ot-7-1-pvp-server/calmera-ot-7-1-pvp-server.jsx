import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-pvp-server');
}

export default function CalmeraOt71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-pvp-server" />;
}
