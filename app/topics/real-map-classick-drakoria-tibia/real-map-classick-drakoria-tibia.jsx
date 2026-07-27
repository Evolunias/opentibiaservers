import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-tibia');
}

export default function RealMapClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-tibia" />;
}
