import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-wiki');
}

export default function NewOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-wiki" />;
}
