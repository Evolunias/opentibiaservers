import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-forum');
}

export default function NewOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-forum" />;
}
