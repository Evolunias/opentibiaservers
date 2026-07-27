import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-forum');
}

export default function NewSeasonBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-forum" />;
}
