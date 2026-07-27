import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-forum');
}

export default function RealMapElderaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-forum" />;
}
