import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-forum');
}

export default function OfficialBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-forum" />;
}
