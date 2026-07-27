import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-france');
}

export default function CustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-france" />;
}
