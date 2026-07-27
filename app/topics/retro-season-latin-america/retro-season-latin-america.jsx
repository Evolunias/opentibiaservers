import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-latin-america');
}

export default function RetroSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-season-latin-america" />;
}
