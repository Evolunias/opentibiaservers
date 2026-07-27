import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-ots');
}

export default function RealMapAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-ots" />;
}
