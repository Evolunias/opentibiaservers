import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-forum');
}

export default function RealMapNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-forum" />;
}
