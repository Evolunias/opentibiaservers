import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-forum');
}

export default function BaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-forum" />;
}
