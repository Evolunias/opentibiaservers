import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-website');
}

export default function RealMapCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-website" />;
}
