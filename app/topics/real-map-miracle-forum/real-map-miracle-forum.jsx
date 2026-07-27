import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-forum');
}

export default function RealMapMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-forum" />;
}
