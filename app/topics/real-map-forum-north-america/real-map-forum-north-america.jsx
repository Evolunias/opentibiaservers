import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-north-america');
}

export default function RealMapForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-north-america" />;
}
