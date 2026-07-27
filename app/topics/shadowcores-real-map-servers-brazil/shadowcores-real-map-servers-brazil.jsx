import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-brazil');
}

export default function ShadowcoresRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-brazil" />;
}
