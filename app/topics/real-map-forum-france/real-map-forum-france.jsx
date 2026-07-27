import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-france');
}

export default function RealMapForumFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-france" />;
}
