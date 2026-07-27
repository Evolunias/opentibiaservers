import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-forum');
}

export default function CustomBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-forum" />;
}
