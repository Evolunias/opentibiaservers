import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-uk');
}

export default function NilotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-uk" />;
}
