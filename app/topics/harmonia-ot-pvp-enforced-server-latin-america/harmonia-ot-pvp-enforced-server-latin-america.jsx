import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-latin-america');
}

export default function HarmoniaOtPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-latin-america" />;
}
