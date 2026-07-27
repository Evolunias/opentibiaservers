import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-poland');
}

export default function ShadowcoresRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-poland" />;
}
