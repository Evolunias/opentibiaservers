import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-latin-america');
}

export default function PvpSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-latin-america" />;
}
