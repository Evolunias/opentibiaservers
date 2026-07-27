import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-poland');
}

export default function EvoWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-poland" />;
}
