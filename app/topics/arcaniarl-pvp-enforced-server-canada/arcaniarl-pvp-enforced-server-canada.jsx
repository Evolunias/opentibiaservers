import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-canada');
}

export default function ArcaniarlPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-canada" />;
}
