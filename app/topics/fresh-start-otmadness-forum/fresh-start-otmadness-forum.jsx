import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-forum');
}

export default function FreshStartOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-forum" />;
}
