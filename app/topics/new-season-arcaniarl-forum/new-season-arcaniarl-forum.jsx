import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-forum');
}

export default function NewSeasonArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-forum" />;
}
