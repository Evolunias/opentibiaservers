import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-forum');
}

export default function ActiveMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-forum" />;
}
