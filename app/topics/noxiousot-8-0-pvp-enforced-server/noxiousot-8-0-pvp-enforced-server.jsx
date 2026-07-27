import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-0-pvp-enforced-server');
}

export default function Noxiousot80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-0-pvp-enforced-server" />;
}
