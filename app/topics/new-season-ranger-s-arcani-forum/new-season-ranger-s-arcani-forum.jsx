import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-forum');
}

export default function NewSeasonRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-forum" />;
}
