import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-wiki');
}

export default function FreshStartEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-wiki" />;
}
