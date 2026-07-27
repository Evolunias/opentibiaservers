import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-forum');
}

export default function CurrentMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-forum" />;
}
