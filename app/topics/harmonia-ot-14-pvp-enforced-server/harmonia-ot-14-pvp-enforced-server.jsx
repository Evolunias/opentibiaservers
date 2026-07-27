import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-pvp-enforced-server');
}

export default function HarmoniaOt14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-pvp-enforced-server" />;
}
