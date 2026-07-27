import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-tibia');
}

export default function RealMapCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-tibia" />;
}
