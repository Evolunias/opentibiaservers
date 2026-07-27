import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-forum');
}

export default function NewMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-forum" />;
}
