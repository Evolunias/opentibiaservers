import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-argentina');
}

export default function HighExpForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-argentina" />;
}
