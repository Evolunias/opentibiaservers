import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-argentina');
}

export default function LowExpForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-argentina" />;
}
