import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-mexico');
}

export default function RealMapForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-mexico" />;
}
