import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-forum');
}

export default function RealMapXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-forum" />;
}
