import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther');
}

export default function RealMapNostaltherKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther" />;
}
