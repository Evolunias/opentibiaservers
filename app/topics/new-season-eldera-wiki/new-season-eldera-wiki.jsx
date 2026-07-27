import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-wiki');
}

export default function NewSeasonElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-wiki" />;
}
