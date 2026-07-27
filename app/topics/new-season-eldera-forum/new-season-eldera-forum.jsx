import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-forum');
}

export default function NewSeasonElderaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-forum" />;
}
