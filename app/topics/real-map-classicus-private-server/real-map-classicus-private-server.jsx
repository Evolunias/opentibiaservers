import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-private-server');
}

export default function RealMapClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-private-server" />;
}
