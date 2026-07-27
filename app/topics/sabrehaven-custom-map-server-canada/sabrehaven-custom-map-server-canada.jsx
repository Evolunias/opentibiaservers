import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-canada');
}

export default function SabrehavenCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-canada" />;
}
