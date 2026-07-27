import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-europe');
}

export default function LowExpForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-europe" />;
}
