import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara');
}

export default function RealMapCyntaraKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara" />;
}
