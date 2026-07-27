import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-europe');
}

export default function HarmoniaOtPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-europe" />;
}
