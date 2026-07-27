import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-latin-america');
}

export default function ArcaniarlNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-latin-america" />;
}
