import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-france');
}

export default function ShadowcoresRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-france" />;
}
