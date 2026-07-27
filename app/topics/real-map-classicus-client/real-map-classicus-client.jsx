import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-client');
}

export default function RealMapClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-client" />;
}
