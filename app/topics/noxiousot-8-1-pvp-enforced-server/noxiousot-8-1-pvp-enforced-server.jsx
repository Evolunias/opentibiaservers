import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-pvp-enforced-server');
}

export default function Noxiousot81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-pvp-enforced-server" />;
}
