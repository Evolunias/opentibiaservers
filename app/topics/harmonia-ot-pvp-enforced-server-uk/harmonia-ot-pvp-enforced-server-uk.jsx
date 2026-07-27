import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-uk');
}

export default function HarmoniaOtPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-uk" />;
}
