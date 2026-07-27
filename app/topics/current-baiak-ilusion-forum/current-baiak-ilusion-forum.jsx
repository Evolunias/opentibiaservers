import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-forum');
}

export default function CurrentBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-forum" />;
}
