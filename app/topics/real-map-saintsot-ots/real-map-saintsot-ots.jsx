import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-ots');
}

export default function RealMapSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-ots" />;
}
