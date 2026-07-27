import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-wiki');
}

export default function NewSeasonRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-wiki" />;
}
