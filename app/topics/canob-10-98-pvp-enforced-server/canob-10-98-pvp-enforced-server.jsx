import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-pvp-enforced-server');
}

export default function Canob1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-pvp-enforced-server" />;
}
