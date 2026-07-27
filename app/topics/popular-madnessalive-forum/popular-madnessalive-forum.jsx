import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-forum');
}

export default function PopularMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-forum" />;
}
