import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-pvp-server');
}

export default function CalmeraOt11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-pvp-server" />;
}
