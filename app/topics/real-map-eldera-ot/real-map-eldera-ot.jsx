import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-ot');
}

export default function RealMapElderaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-ot" />;
}
