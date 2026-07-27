import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-ots');
}

export default function RealMapClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-ots" />;
}
