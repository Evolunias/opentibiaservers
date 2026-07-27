import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-forum');
}

export default function CustomDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-forum" />;
}
