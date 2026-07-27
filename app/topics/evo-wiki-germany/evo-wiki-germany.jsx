import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-germany');
}

export default function EvoWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-germany" />;
}
