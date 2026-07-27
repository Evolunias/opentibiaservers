import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-pvp-enforced-server');
}

export default function Noxiousot13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-pvp-enforced-server" />;
}
