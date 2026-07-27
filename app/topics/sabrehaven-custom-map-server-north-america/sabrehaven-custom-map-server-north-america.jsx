import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-north-america');
}

export default function SabrehavenCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-north-america" />;
}
