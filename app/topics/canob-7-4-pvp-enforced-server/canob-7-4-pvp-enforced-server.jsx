import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-pvp-enforced-server');
}

export default function Canob74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-pvp-enforced-server" />;
}
