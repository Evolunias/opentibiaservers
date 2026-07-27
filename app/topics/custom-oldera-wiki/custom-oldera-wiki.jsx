import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-wiki');
}

export default function CustomOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-wiki" />;
}
