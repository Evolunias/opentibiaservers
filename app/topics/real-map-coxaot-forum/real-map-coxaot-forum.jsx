import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-forum');
}

export default function RealMapCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-forum" />;
}
