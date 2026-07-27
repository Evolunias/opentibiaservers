import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-brazil');
}

export default function NilotCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-brazil" />;
}
