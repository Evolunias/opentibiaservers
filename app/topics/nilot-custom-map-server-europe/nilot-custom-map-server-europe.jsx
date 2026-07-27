import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-europe');
}

export default function NilotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-europe" />;
}
