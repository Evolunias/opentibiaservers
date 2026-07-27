import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-forum');
}

export default function ActiveBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-forum" />;
}
