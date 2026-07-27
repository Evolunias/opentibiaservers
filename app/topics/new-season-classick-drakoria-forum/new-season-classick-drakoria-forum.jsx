import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-forum');
}

export default function NewSeasonClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-forum" />;
}
