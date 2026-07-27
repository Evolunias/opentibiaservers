import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-latin-america');
}

export default function RealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-latin-america" />;
}
