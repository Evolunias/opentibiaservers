import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-france');
}

export default function OlderaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-france" />;
}
