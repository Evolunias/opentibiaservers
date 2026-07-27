import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-forum');
}

export default function NewSeasonOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-forum" />;
}
