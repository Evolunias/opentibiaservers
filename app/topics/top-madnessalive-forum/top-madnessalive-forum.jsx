import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-forum');
}

export default function TopMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-forum" />;
}
