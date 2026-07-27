import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-wiki');
}

export default function CurrentOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-wiki" />;
}
