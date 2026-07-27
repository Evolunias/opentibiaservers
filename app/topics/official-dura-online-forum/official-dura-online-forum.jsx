import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-forum');
}

export default function OfficialDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-forum" />;
}
