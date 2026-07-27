import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-latin-america');
}

export default function SabrehavenCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-latin-america" />;
}
