import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-canada');
}

export default function EvoWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-canada" />;
}
