import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-north-america');
}

export default function ArcaniarlPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-north-america" />;
}
