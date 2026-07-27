import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-forum');
}

export default function TheForgottenServerForumKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-forum" />;
}
