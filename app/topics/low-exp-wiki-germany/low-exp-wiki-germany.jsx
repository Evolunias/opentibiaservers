import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-germany');
}

export default function LowExpWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-germany" />;
}
