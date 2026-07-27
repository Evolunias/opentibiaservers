import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-enforced-server-latin-america');
}

export default function CalmeraOtPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-enforced-server-latin-america" />;
}
