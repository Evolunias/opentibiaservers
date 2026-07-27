import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-canada');
}

export default function LowExpForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-canada" />;
}
