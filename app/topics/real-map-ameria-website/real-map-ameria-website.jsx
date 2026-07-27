import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-website');
}

export default function RealMapAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-website" />;
}
