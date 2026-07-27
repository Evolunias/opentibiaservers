import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-south-america');
}

export default function LowExpForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-south-america" />;
}
