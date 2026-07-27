import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-ot');
}

export default function RealMapDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-ot" />;
}
