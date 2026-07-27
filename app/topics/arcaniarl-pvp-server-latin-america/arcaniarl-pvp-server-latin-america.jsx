import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-latin-america');
}

export default function ArcaniarlPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-latin-america" />;
}
