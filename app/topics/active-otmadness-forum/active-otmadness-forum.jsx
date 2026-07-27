import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-forum');
}

export default function ActiveOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-forum" />;
}
