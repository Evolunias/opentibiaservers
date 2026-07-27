import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-forum');
}

export default function ActiveDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-forum" />;
}
