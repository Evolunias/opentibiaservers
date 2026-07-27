import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-latin-america');
}

export default function CalmeraOtPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-latin-america" />;
}
