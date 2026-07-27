import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-pvp-server');
}

export default function CalmeraOt12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-pvp-server" />;
}
