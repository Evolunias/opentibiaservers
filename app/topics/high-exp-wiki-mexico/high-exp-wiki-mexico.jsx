import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-mexico');
}

export default function HighExpWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-mexico" />;
}
