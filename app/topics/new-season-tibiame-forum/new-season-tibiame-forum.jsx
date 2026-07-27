import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-forum');
}

export default function NewSeasonTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-forum" />;
}
