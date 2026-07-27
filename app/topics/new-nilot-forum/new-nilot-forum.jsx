import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-forum');
}

export default function NewNilotForumKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-forum" />;
}
