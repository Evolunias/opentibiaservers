import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-north-america');
}

export default function EvoWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-north-america" />;
}
