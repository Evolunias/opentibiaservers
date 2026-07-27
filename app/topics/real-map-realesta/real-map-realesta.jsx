import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta');
}

export default function RealMapRealestaKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta" />;
}
