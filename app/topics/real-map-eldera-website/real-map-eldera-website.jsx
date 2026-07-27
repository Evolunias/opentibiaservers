import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-website');
}

export default function RealMapElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-website" />;
}
