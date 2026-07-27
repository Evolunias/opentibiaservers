import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-canada');
}

export default function NilotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-canada" />;
}
