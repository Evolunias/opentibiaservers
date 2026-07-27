import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-forum');
}

export default function NewSeasonOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-forum" />;
}
