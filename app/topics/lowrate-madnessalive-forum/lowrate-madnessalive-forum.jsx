import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-forum');
}

export default function LowrateMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-forum" />;
}
