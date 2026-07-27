import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-pvp-enforced-server');
}

export default function Noxiousot96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-pvp-enforced-server" />;
}
