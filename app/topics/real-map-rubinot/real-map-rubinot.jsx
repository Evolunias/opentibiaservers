import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot');
}

export default function RealMapRubinotKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot" />;
}
