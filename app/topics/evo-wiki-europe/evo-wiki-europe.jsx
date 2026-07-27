import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-europe');
}

export default function EvoWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-europe" />;
}
