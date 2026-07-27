import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-france');
}

export default function HarmoniaOtPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-france" />;
}
