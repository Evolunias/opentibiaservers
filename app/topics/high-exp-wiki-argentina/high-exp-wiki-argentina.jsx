import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-argentina');
}

export default function HighExpWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-argentina" />;
}
