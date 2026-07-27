import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-enforced-server-north-america');
}

export default function InfernalOtPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-enforced-server-north-america" />;
}
