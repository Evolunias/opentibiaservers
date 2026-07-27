import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-uk');
}

export default function FreshStartForumUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-uk" />;
}
