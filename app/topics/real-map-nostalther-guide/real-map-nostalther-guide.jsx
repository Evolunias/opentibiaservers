import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-guide');
}

export default function RealMapNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-guide" />;
}
