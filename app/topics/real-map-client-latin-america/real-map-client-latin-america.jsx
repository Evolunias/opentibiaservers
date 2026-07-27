import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-latin-america');
}

export default function RealMapClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-latin-america" />;
}
