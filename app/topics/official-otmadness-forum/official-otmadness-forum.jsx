import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-forum');
}

export default function OfficialOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-forum" />;
}
