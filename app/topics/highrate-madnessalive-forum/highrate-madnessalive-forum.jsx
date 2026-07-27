import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-forum');
}

export default function HighrateMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-forum" />;
}
