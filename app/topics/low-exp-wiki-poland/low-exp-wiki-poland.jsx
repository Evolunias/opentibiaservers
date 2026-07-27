import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-poland');
}

export default function LowExpWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-poland" />;
}
