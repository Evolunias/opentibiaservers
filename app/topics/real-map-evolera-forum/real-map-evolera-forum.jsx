import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-forum');
}

export default function RealMapEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-forum" />;
}
