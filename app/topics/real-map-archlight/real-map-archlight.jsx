import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight');
}

export default function RealMapArchlightKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight" />;
}
