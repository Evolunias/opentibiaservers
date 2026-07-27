import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-forum');
}

export default function RealMapMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-forum" />;
}
