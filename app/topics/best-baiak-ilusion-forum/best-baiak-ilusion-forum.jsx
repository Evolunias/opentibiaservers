import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-forum');
}

export default function BestBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-forum" />;
}
