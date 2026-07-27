import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-tibia');
}

export default function RealMapNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-tibia" />;
}
