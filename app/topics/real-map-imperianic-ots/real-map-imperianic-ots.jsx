import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-ots');
}

export default function RealMapImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-ots" />;
}
