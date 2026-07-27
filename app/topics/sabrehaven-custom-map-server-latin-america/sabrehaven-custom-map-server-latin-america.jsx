import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-latin-america');
}

export default function SabrehavenCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-latin-america" />;
}
