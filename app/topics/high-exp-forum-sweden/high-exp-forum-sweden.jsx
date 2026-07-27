import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-sweden');
}

export default function HighExpForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-sweden" />;
}
