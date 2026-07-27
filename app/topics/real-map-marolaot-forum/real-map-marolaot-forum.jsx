import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-forum');
}

export default function RealMapMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-forum" />;
}
