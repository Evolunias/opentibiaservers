import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-france');
}

export default function ShadowcoresRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-france" />;
}
