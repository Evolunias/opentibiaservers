import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-forum');
}

export default function NewSeasonKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-forum" />;
}
