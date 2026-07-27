import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-official');
}

export default function RealMapNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-official" />;
}
