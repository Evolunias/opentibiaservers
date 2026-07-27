import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-wiki');
}

export default function ActiveOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-wiki" />;
}
