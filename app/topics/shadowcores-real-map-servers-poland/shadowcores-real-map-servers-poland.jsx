import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-poland');
}

export default function ShadowcoresRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-poland" />;
}
