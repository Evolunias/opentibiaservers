import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-pvp-enforced-server');
}

export default function Noxiousot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-pvp-enforced-server" />;
}
