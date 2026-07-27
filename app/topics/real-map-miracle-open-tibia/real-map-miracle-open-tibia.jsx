import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-open-tibia');
}

export default function RealMapMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-open-tibia" />;
}
