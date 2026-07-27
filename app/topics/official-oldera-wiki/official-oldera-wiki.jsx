import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-wiki');
}

export default function OfficialOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-wiki" />;
}
