import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-canada');
}

export default function NilotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-canada" />;
}
