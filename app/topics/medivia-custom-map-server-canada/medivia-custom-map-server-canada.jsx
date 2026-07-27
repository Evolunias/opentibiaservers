import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-canada');
}

export default function MediviaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-canada" />;
}
