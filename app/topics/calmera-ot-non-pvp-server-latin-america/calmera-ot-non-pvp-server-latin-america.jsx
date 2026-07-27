import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-latin-america');
}

export default function CalmeraOtNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-latin-america" />;
}
