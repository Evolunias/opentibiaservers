import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-north-america');
}

export default function HarmoniaOtPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-north-america" />;
}
