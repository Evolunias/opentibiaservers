import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-website');
}

export default function RealMapOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-website" />;
}
