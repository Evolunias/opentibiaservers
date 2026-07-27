import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-north-america');
}

export default function HighExpForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-north-america" />;
}
