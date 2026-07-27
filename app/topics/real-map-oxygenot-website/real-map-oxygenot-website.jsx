import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-website');
}

export default function RealMapOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-website" />;
}
