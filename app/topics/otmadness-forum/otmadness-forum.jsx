import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-forum');
}

export default function OtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="otmadness-forum" />;
}
