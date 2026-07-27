import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-usa');
}

export default function HighExpForumUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-usa" />;
}
