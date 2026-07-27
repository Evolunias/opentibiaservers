import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-mexico');
}

export default function LowExpWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-mexico" />;
}
