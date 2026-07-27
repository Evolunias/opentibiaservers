import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-forum');
}

export default function NoResetBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-forum" />;
}
