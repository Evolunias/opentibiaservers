import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-website');
}

export default function RealMapBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-website" />;
}
