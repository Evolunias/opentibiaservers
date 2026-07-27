import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-sweden');
}

export default function EvoWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-sweden" />;
}
