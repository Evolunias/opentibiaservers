import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-website');
}

export default function RealMapCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-website" />;
}
