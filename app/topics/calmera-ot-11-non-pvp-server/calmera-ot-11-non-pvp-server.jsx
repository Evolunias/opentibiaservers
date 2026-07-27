import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-non-pvp-server');
}

export default function CalmeraOt11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-non-pvp-server" />;
}
