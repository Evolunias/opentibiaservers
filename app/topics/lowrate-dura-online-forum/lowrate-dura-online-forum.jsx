import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-forum');
}

export default function LowrateDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-forum" />;
}
