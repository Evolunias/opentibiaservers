import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-website');
}

export default function RealMapClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-website" />;
}
