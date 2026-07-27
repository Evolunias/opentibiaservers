import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-europe');
}

export default function ArcaniarlPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-europe" />;
}
