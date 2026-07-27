import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-wiki');
}

export default function NewSeasonBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-wiki" />;
}
