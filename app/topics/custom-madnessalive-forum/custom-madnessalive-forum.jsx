import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-forum');
}

export default function CustomMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-forum" />;
}
