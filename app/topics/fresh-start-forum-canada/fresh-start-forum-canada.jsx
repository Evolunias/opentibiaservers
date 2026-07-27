import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-canada');
}

export default function FreshStartForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-canada" />;
}
