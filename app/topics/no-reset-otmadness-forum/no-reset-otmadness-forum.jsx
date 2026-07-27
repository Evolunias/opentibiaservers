import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-forum');
}

export default function NoResetOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-forum" />;
}
