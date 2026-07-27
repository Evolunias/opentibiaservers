import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-forum');
}

export default function ForgottenServerForumKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-forum" />;
}
