import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-forum');
}

export default function RealMapMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-forum" />;
}
