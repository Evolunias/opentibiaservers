import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-argentina');
}

export default function SabrehavenCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-argentina" />;
}
