import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-latin-america');
}

export default function RealMapServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-latin-america" />;
}
