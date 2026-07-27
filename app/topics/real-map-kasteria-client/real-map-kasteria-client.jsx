import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-client');
}

export default function RealMapKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-client" />;
}
