import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-poland');
}

export default function ArcaniarlPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-poland" />;
}
