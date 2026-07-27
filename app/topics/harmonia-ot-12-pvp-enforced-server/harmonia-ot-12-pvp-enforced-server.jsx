import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-pvp-enforced-server');
}

export default function HarmoniaOt12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-pvp-enforced-server" />;
}
