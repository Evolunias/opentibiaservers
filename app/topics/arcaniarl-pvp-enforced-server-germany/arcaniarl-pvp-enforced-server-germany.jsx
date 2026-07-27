import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-germany');
}

export default function ArcaniarlPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-germany" />;
}
