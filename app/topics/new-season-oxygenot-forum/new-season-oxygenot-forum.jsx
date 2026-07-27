import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-forum');
}

export default function NewSeasonOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-forum" />;
}
