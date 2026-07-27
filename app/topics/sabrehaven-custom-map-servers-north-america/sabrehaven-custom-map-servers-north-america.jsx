import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-north-america');
}

export default function SabrehavenCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-north-america" />;
}
