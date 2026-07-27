import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-enforced-server-latin-america');
}

export default function InfernalOtPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-enforced-server-latin-america" />;
}
