import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-forum');
}

export default function OfficialNilotForumKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-forum" />;
}
