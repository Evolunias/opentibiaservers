import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-wiki');
}

export default function NewSeasonUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-wiki" />;
}
