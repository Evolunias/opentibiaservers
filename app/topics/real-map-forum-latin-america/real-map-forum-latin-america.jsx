import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-latin-america');
}

export default function RealMapForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-latin-america" />;
}
