import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-mexico');
}

export default function LowExpForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-mexico" />;
}
