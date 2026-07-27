import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-wiki');
}

export default function NewSeasonSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-wiki" />;
}
