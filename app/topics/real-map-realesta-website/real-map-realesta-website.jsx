import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-website');
}

export default function RealMapRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-website" />;
}
