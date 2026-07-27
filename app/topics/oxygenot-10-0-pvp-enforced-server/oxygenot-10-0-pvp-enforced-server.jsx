import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-pvp-enforced-server');
}

export default function Oxygenot100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-pvp-enforced-server" />;
}
