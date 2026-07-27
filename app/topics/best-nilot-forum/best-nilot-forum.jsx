import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-forum');
}

export default function BestNilotForumKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-forum" />;
}
