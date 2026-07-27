import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-forum');
}

export default function NoResetMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-forum" />;
}
