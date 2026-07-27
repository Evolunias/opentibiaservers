import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-ots');
}

export default function RealMapCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-ots" />;
}
