import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-europe');
}

export default function ShadowcoresRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-europe" />;
}
