import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-wiki');
}

export default function PopularEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-wiki" />;
}
