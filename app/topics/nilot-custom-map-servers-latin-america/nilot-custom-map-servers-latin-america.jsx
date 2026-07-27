import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-latin-america');
}

export default function NilotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-latin-america" />;
}
