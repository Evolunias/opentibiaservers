import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-brazil');
}

export default function SabrehavenCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-brazil" />;
}
