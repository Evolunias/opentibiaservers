import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-canada');
}

export default function NilotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-canada" />;
}
