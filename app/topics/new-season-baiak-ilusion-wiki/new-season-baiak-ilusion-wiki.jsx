import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-wiki');
}

export default function NewSeasonBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-wiki" />;
}
