import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-latin-america');
}

export default function RealMapOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-latin-america" />;
}
