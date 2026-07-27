import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-pvp-enforced-server');
}

export default function Noxiousot74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-pvp-enforced-server" />;
}
