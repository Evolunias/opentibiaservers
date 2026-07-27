import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-pvp-enforced-server');
}

export default function Canob15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-pvp-enforced-server" />;
}
