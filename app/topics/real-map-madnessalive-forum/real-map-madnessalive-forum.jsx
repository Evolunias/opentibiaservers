import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-forum');
}

export default function RealMapMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-forum" />;
}
