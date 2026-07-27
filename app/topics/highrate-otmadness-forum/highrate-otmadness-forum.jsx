import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-forum');
}

export default function HighrateOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-forum" />;
}
