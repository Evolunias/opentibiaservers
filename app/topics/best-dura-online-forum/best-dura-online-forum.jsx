import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-forum');
}

export default function BestDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-forum" />;
}
