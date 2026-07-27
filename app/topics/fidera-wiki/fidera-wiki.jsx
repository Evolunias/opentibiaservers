import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-wiki');
}

export default function FideraWikiKeywordPage() {
  return <StaticKeywordPage slug="fidera-wiki" />;
}
