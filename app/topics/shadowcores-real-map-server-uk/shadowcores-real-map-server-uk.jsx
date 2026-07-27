import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-uk');
}

export default function ShadowcoresRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-uk" />;
}
