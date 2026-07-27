import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-forum');
}

export default function RealMapCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-forum" />;
}
