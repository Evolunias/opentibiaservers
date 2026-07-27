import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-pvp-enforced-server');
}

export default function Noxiousot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-pvp-enforced-server" />;
}
