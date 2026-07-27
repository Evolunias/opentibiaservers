import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-forum');
}

export default function NewSeasonNilotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-forum" />;
}
