import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-forum');
}

export default function NewSeasonMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-forum" />;
}
