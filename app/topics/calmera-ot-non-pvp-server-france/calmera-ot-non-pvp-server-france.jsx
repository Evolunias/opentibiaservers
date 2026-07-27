import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-france');
}

export default function CalmeraOtNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-france" />;
}
