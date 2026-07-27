import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-forum');
}

export default function RealMapOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-forum" />;
}
