import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-non-pvp-server');
}

export default function CalmeraOt15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-non-pvp-server" />;
}
