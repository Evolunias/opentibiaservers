import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-official');
}

export default function RealMapOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-official" />;
}
