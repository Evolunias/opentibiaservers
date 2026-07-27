import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-wiki');
}

export default function TopOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-wiki" />;
}
