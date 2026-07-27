import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-wiki');
}

export default function NewSeasonOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-wiki" />;
}
