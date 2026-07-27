import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-uk');
}

export default function NilotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-uk" />;
}
