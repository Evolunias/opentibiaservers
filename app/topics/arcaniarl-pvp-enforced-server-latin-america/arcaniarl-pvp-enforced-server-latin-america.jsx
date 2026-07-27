import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-latin-america');
}

export default function ArcaniarlPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-latin-america" />;
}
