import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-forum');
}

export default function FreshStartBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-forum" />;
}
