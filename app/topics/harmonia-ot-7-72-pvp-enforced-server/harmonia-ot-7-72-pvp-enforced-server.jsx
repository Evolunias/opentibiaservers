import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-pvp-enforced-server');
}

export default function HarmoniaOt772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-pvp-enforced-server" />;
}
