import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-mexico');
}

export default function RealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-mexico" />;
}
