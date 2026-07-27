import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-forum');
}

export default function OtServerListForumKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-forum" />;
}
