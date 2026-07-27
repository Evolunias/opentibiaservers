import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-latin-america');
}

export default function ShadowcoresRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-latin-america" />;
}
