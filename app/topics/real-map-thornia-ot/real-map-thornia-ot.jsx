import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-ot');
}

export default function RealMapThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-ot" />;
}
