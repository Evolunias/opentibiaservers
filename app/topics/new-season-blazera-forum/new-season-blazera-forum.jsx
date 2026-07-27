import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-forum');
}

export default function NewSeasonBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-forum" />;
}
