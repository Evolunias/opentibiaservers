import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-server');
}

export default function RealMapClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-server" />;
}
