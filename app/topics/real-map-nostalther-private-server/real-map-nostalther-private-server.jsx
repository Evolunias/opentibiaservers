import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-private-server');
}

export default function RealMapNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-private-server" />;
}
