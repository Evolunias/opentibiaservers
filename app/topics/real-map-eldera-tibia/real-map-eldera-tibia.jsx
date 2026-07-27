import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-tibia');
}

export default function RealMapElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-tibia" />;
}
