import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-usa');
}

export default function EvoWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-usa" />;
}
