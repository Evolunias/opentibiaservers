import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-forum');
}

export default function NewBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-forum" />;
}
