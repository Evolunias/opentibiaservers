import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-north-america');
}

export default function LowExpForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-north-america" />;
}
