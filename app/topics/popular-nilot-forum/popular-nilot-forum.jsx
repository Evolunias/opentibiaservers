import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-forum');
}

export default function PopularNilotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-forum" />;
}
