import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-argentina');
}

export default function LowExpWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-argentina" />;
}
