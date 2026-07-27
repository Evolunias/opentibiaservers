import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-mexico');
}

export default function HighExpForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-mexico" />;
}
