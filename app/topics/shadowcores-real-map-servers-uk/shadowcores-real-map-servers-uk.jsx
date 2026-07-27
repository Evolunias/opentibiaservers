import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-uk');
}

export default function ShadowcoresRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-uk" />;
}
