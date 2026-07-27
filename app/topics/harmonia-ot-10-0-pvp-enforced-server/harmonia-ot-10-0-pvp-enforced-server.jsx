import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-pvp-enforced-server');
}

export default function HarmoniaOt100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-pvp-enforced-server" />;
}
