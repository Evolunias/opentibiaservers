import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-forum');
}

export default function RealMapLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-forum" />;
}
