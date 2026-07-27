import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-wiki');
}

export default function BestOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-wiki" />;
}
