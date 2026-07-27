import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-wiki');
}

export default function EvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="evolera-wiki" />;
}
