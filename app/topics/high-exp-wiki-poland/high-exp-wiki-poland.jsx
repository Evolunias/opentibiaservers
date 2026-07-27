import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-poland');
}

export default function HighExpWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-poland" />;
}
