import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-wiki');
}

export default function NewEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-wiki" />;
}
