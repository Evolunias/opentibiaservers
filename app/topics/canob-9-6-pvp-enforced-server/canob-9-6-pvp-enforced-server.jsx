import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-pvp-enforced-server');
}

export default function Canob96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-pvp-enforced-server" />;
}
