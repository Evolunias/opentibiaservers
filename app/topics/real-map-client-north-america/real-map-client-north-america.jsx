import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-north-america');
}

export default function RealMapClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-north-america" />;
}
