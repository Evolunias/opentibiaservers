import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-europe');
}

export default function FreshStartForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-europe" />;
}
