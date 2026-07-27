import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-website');
}

export default function RealMapRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-website" />;
}
