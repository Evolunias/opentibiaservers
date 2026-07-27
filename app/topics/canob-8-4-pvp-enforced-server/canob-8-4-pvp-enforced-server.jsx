import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-pvp-enforced-server');
}

export default function Canob84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-pvp-enforced-server" />;
}
