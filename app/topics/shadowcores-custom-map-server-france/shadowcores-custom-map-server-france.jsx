import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-france');
}

export default function ShadowcoresCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-france" />;
}
