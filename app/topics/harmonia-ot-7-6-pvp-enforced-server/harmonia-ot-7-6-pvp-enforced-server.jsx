import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-6-pvp-enforced-server');
}

export default function HarmoniaOt76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-6-pvp-enforced-server" />;
}
