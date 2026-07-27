import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-forum');
}

export default function FreshStartMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-forum" />;
}
