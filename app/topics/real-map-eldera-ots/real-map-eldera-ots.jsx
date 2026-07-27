import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-ots');
}

export default function RealMapElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-ots" />;
}
