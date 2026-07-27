import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-forum');
}

export default function HighrateRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-forum" />;
}
