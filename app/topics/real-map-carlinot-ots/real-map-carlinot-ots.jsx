import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-ots');
}

export default function RealMapCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-ots" />;
}
