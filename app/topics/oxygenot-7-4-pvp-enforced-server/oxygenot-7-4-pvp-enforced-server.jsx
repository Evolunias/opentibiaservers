import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-pvp-enforced-server');
}

export default function Oxygenot74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-pvp-enforced-server" />;
}
