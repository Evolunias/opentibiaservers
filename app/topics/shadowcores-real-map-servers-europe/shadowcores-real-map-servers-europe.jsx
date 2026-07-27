import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-europe');
}

export default function ShadowcoresRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-europe" />;
}
