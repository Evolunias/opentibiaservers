import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-wiki');
}

export default function NewSeasonSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-wiki" />;
}
