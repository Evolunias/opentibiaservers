import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-forum');
}

export default function OfficialRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-forum" />;
}
