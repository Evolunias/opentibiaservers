import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-germany');
}

export default function HighExpWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-germany" />;
}
