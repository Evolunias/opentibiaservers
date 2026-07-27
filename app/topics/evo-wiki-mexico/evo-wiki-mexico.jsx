import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-mexico');
}

export default function EvoWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-mexico" />;
}
