import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-4-pvp-server');
}

export default function CalmeraOt74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-4-pvp-server" />;
}
