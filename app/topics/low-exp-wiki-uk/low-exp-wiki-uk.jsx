import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-uk');
}

export default function LowExpWikiUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-uk" />;
}
