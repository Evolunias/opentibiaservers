import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-forum');
}

export default function BestMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-forum" />;
}
