import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-forum');
}

export default function LowrateBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-forum" />;
}
