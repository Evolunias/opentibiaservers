import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-forum');
}

export default function TopNilotForumKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-forum" />;
}
