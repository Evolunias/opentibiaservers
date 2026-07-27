import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-website');
}

export default function RealMapThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-website" />;
}
