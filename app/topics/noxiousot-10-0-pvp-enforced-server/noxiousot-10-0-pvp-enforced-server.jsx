import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-pvp-enforced-server');
}

export default function Noxiousot100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-pvp-enforced-server" />;
}
