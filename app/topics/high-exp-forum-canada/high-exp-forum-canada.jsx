import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-canada');
}

export default function HighExpForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-canada" />;
}
