import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-latin-america');
}

export default function RetroWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-latin-america" />;
}
