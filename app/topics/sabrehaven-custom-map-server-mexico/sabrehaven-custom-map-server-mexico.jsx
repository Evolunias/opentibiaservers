import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-mexico');
}

export default function SabrehavenCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-mexico" />;
}
