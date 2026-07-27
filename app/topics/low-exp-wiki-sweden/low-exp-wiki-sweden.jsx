import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-sweden');
}

export default function LowExpWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-sweden" />;
}
