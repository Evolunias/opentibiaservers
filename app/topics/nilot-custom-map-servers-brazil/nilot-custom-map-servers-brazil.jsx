import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-brazil');
}

export default function NilotCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-brazil" />;
}
