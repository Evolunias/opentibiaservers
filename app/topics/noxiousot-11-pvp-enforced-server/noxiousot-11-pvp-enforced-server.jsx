import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-pvp-enforced-server');
}

export default function Noxiousot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-pvp-enforced-server" />;
}
