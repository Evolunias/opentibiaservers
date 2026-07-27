import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-ot');
}

export default function RealMapCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-ot" />;
}
