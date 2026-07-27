import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-open-tibia');
}

export default function RealMapCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-open-tibia" />;
}
