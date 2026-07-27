import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-ots');
}

export default function RealMapThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-ots" />;
}
