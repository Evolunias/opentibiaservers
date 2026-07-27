import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-website');
}

export default function RealMapNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-website" />;
}
