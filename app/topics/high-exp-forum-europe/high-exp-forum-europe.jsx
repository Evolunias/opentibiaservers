import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-europe');
}

export default function HighExpForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-europe" />;
}
