import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-forum');
}

export default function HighrateBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-forum" />;
}
