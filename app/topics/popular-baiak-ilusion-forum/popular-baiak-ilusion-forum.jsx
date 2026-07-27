import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-forum');
}

export default function PopularBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-forum" />;
}
