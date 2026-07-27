import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-uk');
}

export default function RealMapForumUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-uk" />;
}
