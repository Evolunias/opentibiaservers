import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-forum');
}

export default function RealMapNilotForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-forum" />;
}
