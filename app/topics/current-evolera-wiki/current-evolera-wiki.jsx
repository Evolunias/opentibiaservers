import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-wiki');
}

export default function CurrentEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-wiki" />;
}
