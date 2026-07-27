import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-forum');
}

export default function RealMapTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-forum" />;
}
