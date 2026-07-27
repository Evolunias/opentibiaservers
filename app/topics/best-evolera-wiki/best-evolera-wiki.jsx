import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-wiki');
}

export default function BestEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-wiki" />;
}
