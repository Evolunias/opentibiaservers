import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-usa');
}

export default function LowExpForumUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-usa" />;
}
