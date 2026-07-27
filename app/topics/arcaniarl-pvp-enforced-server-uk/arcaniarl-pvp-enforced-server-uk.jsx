import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-uk');
}

export default function ArcaniarlPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-uk" />;
}
