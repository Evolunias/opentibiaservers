import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-servers');
}

export default function RealMapNostaltherServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-servers" />;
}
