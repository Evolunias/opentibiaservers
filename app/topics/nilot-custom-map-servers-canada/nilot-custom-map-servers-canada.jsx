import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-canada');
}

export default function NilotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-canada" />;
}
