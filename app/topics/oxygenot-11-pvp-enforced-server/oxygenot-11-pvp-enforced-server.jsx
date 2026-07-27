import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-pvp-enforced-server');
}

export default function Oxygenot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-pvp-enforced-server" />;
}
