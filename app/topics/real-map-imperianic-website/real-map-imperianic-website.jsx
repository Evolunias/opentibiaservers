import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-website');
}

export default function RealMapImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-website" />;
}
