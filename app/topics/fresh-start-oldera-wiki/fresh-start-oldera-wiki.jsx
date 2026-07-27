import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-wiki');
}

export default function FreshStartOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-wiki" />;
}
