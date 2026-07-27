import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-pvp-enforced-server');
}

export default function Noxiousot71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-pvp-enforced-server" />;
}
