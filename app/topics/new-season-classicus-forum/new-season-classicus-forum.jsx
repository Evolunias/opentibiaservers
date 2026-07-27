import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-forum');
}

export default function NewSeasonClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-forum" />;
}
