import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-south-america');
}

export default function FreshStartForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-south-america" />;
}
