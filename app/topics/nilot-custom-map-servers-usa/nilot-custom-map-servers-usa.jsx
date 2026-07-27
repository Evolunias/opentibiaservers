import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-usa');
}

export default function NilotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-usa" />;
}
