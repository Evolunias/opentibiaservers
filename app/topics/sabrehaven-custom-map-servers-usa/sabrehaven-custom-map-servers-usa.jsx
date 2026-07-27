import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-usa');
}

export default function SabrehavenCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-usa" />;
}
