import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-pvp-enforced-server');
}

export default function Noxiousot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-pvp-enforced-server" />;
}
