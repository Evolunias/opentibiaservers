import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-north-america');
}

export default function MediviaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-north-america" />;
}
