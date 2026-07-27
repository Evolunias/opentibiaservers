import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-usa');
}

export default function LowExpWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-usa" />;
}
