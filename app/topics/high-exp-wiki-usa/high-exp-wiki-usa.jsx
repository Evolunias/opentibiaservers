import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-usa');
}

export default function HighExpWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-usa" />;
}
