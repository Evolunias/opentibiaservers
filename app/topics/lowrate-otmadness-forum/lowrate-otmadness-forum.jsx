import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-forum');
}

export default function LowrateOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-forum" />;
}
