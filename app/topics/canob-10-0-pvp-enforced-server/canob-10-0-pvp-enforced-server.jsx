import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-pvp-enforced-server');
}

export default function Canob100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-pvp-enforced-server" />;
}
