import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-mexico');
}

export default function NilotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-mexico" />;
}
