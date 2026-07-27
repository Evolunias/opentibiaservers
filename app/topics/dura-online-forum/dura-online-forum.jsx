import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-forum');
}

export default function DuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="dura-online-forum" />;
}
