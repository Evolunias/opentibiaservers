import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-uk');
}

export default function HighExpWikiUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-uk" />;
}
