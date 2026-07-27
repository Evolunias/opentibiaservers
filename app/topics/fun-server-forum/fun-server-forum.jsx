import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-forum');
}

export default function FunServerForumKeywordPage() {
  return <StaticKeywordPage slug="fun-server-forum" />;
}
