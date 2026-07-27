import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-sweden');
}

export default function HighExpWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-sweden" />;
}
