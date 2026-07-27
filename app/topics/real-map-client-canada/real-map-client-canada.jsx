import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-canada');
}

export default function RealMapClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-canada" />;
}
