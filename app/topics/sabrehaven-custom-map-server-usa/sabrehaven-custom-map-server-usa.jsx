import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-usa');
}

export default function SabrehavenCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-usa" />;
}
