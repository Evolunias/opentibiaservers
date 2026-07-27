import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-forum');
}

export default function CurrentNilotForumKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-forum" />;
}
