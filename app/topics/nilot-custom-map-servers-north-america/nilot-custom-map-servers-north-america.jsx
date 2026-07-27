import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-north-america');
}

export default function NilotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-north-america" />;
}
