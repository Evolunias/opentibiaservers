import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-wiki');
}

export default function NewSeasonTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-wiki" />;
}
