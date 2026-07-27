import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-open-tibia');
}

export default function RealMapNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-open-tibia" />;
}
