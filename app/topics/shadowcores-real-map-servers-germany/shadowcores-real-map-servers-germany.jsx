import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-germany');
}

export default function ShadowcoresRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-germany" />;
}
