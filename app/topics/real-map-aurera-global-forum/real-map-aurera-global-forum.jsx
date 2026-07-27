import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-forum');
}

export default function RealMapAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-forum" />;
}
