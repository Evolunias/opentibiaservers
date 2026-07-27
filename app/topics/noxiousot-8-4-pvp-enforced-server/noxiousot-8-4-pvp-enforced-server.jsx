import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-pvp-enforced-server');
}

export default function Noxiousot84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-pvp-enforced-server" />;
}
