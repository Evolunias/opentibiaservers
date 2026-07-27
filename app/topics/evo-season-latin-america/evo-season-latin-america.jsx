import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-latin-america');
}

export default function EvoSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-season-latin-america" />;
}
