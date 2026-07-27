import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-europe');
}

export default function NilotCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-europe" />;
}
