import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-sweden');
}

export default function LowExpForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-sweden" />;
}
