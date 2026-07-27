import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-forum');
}

export default function RealMapCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-forum" />;
}
