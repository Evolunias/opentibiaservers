import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-pvp-enforced-server');
}

export default function Noxiousot76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-pvp-enforced-server" />;
}
