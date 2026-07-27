import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-forum');
}

export default function HighrateDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-forum" />;
}
