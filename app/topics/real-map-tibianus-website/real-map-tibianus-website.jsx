import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-website');
}

export default function RealMapTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-website" />;
}
