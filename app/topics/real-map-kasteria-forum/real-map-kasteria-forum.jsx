import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-forum');
}

export default function RealMapKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-forum" />;
}
