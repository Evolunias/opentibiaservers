import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-website');
}

export default function RealMapKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-website" />;
}
