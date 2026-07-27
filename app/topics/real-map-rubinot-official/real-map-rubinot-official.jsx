import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-official');
}

export default function RealMapRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-official" />;
}
