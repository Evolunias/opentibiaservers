import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-forum');
}

export default function NewSeasonThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-forum" />;
}
