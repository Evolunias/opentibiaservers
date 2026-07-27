import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-non-pvp-server');
}

export default function CalmeraOt12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-non-pvp-server" />;
}
