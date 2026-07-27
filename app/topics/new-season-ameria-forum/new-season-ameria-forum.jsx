import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-forum');
}

export default function NewSeasonAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-forum" />;
}
