import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-latin-america');
}

export default function LowExpForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-latin-america" />;
}
