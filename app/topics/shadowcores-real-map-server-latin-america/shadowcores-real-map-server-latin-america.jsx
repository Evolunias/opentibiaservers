import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-latin-america');
}

export default function ShadowcoresRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-latin-america" />;
}
