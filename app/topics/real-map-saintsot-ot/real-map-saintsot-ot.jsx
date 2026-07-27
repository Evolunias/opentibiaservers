import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-ot');
}

export default function RealMapSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-ot" />;
}
