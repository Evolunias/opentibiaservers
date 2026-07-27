import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-mexico');
}

export default function SabrehavenCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-mexico" />;
}
