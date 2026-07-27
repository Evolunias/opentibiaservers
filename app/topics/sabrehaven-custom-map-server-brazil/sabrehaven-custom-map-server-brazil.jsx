import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-brazil');
}

export default function SabrehavenCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-brazil" />;
}
