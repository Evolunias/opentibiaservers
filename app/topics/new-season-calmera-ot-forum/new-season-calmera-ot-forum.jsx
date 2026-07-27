import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-forum');
}

export default function NewSeasonCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-forum" />;
}
