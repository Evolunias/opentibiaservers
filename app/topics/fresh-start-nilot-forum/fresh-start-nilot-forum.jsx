import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-forum');
}

export default function FreshStartNilotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-forum" />;
}
