import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-client');
}

export default function RealMapNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-client" />;
}
