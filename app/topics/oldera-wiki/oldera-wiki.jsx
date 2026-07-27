import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-wiki');
}

export default function OlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="oldera-wiki" />;
}
