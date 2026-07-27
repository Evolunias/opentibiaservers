import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-forum');
}

export default function NewSeasonZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-forum" />;
}
