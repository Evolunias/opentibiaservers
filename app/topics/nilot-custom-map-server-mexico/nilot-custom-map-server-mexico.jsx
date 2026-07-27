import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-mexico');
}

export default function NilotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-mexico" />;
}
