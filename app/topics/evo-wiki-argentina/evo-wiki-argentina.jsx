import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-argentina');
}

export default function EvoWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-argentina" />;
}
