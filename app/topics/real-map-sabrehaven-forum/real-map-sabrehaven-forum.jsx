import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-forum');
}

export default function RealMapSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-forum" />;
}
