import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-0-pvp-enforced-server');
}

export default function Canob80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-0-pvp-enforced-server" />;
}
