import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-pvp-enforced-server');
}

export default function HarmoniaOt81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-pvp-enforced-server" />;
}
