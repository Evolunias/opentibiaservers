import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-canada');
}

export default function SabrehavenCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-canada" />;
}
