import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-wiki');
}

export default function NewSeasonMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-wiki" />;
}
