import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-wiki');
}

export default function NewSeasonZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-wiki" />;
}
