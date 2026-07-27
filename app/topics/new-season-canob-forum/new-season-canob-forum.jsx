import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-forum');
}

export default function NewSeasonCanobForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-forum" />;
}
