import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-argentina');
}

export default function NilotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-argentina" />;
}
