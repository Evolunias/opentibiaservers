import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-canada');
}

export default function MediviaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-canada" />;
}
