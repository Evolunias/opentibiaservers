import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-forum');
}

export default function CustomOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-forum" />;
}
