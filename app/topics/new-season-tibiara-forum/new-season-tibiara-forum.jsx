import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-forum');
}

export default function NewSeasonTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-forum" />;
}
