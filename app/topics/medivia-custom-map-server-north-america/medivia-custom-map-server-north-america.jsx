import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-north-america');
}

export default function MediviaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-north-america" />;
}
