import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-forum');
}

export default function MadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-forum" />;
}
