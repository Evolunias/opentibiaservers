import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-france');
}

export default function CustomMapOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-france" />;
}
