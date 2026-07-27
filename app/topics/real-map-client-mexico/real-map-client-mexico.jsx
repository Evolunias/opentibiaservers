import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-mexico');
}

export default function RealMapClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-mexico" />;
}
