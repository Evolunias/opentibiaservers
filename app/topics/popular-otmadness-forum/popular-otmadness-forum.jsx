import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-forum');
}

export default function PopularOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-forum" />;
}
