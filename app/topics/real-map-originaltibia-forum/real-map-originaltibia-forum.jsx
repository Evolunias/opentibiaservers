import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-forum');
}

export default function RealMapOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-forum" />;
}
