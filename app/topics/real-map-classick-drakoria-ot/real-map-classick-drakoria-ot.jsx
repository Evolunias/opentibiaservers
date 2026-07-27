import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-ot');
}

export default function RealMapClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-ot" />;
}
