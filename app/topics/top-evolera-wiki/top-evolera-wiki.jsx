import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-wiki');
}

export default function TopEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-wiki" />;
}
