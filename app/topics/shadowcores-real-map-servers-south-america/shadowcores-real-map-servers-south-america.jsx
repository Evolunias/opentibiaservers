import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-south-america');
}

export default function ShadowcoresRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-south-america" />;
}
