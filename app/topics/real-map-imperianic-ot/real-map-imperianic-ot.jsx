import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-ot');
}

export default function RealMapImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-ot" />;
}
