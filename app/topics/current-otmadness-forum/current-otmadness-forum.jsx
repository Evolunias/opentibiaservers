import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-forum');
}

export default function CurrentOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-forum" />;
}
