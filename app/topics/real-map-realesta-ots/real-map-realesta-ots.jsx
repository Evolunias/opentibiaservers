import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-ots');
}

export default function RealMapRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-ots" />;
}
