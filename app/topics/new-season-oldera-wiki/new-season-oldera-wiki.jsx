import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-wiki');
}

export default function NewSeasonOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-wiki" />;
}
