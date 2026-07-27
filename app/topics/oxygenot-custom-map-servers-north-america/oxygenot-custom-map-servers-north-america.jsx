import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-north-america');
}

export default function OxygenotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-north-america" />;
}
