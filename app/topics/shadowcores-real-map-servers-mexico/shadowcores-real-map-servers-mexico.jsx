import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-mexico');
}

export default function ShadowcoresRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-mexico" />;
}
