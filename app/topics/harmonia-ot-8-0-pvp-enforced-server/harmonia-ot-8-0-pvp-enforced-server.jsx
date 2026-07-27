import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-pvp-enforced-server');
}

export default function HarmoniaOt80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-pvp-enforced-server" />;
}
