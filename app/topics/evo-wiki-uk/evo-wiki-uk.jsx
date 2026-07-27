import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-uk');
}

export default function EvoWikiUkKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-uk" />;
}
