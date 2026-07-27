import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-server');
}

export default function RealMapNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-server" />;
}
