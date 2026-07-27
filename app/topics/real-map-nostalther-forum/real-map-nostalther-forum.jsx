import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-forum');
}

export default function RealMapNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-forum" />;
}
