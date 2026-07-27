import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-forum');
}

export default function TopBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-forum" />;
}
