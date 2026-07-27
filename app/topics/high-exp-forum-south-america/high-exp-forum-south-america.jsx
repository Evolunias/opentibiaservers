import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-south-america');
}

export default function HighExpForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-south-america" />;
}
