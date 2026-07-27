import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-forum');
}

export default function BestOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-forum" />;
}
