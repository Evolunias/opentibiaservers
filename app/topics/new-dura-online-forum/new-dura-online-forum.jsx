import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-forum');
}

export default function NewDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-forum" />;
}
