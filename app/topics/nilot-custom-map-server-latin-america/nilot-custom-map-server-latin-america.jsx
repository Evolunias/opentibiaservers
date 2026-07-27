import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-latin-america');
}

export default function NilotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-latin-america" />;
}
