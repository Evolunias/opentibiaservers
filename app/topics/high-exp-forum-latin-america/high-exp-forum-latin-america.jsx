import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-latin-america');
}

export default function HighExpForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-latin-america" />;
}
